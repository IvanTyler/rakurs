'use client'

import {FC, useRef, useState} from "react";
import style from './FormFeedback.module.scss';
import {Button} from "@/src/Components/UI/SubmitButton/Button";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from "@tanstack/react-query";
import {questionForm} from "@/src/api/QuestionForm";
import {queryClient} from "@/src/api/queryClient";
import {Input} from "@/src/Components/UI/Input/Input";
import {IMaskInput} from "react-imask";
import {clsx} from "clsx";

interface IFormFeedbackProps {
    classNameForm?: string;
}

export const FormFeedback: FC<IFormFeedbackProps> = ({classNameForm}) => {

    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);


    const validateFormSchema = z.object({
        name: z.string()
            .min(1, 'Пожалуйста, введите ваше имя')
            .max(30, 'Имя не должно превышать 30 символов'),
        phone: z.string()
            .min(14, 'Пожалуйста, введите номер телефона'),
        email: z.string()
            .min(1, 'Пожалуйста, введите E-Mail')
            .max(50, 'E-Mail не должен превышать 50 символов')
            .email('Пожалуйста, введите корректный E-Mail'),
        privacyPolicy: z.boolean()
            .refine(val => val === true),
        marketing: z.boolean().optional(),
    });

    type FormValidation = z.infer<typeof validateFormSchema>

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}
    } = useForm<FormValidation>({
        resolver: zodResolver(validateFormSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            privacyPolicy: false,
            marketing: false,
        }
    });


    const questionFormMutation = useMutation({
        mutationFn: questionForm,
        onSuccess: () => {
            console.log('Форма успешно отправлена');
            setIsSuccessMessage(true);
            reset();
            setTimeout(() => setIsSuccessMessage(false), 4000)
        },
        onError: (error) => {
            setIsErrorMessage(true)
            setTimeout(() => setIsErrorMessage(false), 4000)
            console.error('Ошибка мутации:', error);
        }
    }, queryClient);


    const formatPhoneNumber = (phone: string) => {
        return phone.replace(/[^0-9+]/g, '').trim();
    };


    return (
        <form className={clsx(style.formFeedback, classNameForm)} onSubmit={handleSubmit(({name, phone, email}) => {
            const trimmedPhone = formatPhoneNumber(phone);
            questionFormMutation.mutate({ name, phone: trimmedPhone, email });
        })}>
            <label className={style.formFeedback__label}>
                <Input
                    className={clsx(style.formFeedback__input, errors.name && style.formFeedback__errorInput)}
                    type={'text'}
                    {...register('name')}
                    placeholder="(имя фамилия)"
                    maxLength={30}
                />
                {errors.name && <span className={style.formFeedback__error}>{errors.name.message}</span>}
            </label>
            <label className={style.formFeedback__label}>
                <IMaskInput
                    mask="+{7}(000)000-00-00"
                    placeholder="(телефон)"
                    defaultValue="" // Явно указываем defaultValue
                    onAccept={(value) => setValue('phone', value, { shouldValidate: true })}
                    className={clsx(style.formFeedback__phoneInput, errors.phone && style.formFeedback__errorInput)}
                />
                {errors.phone && <span className={style.formFeedback__error}>{errors.phone.message}</span>}
            </label>
            <label className={style.formFeedback__label}>
                <Input
                    className={clsx(style.formFeedback__input, errors.email && style.formFeedback__errorInput)}
                    type={'email'}
                    {...register('email')}
                    placeholder="(почта)"
                    maxLength={50}
                />
                {errors.email && <span className={style.formFeedback__error}>{errors.email.message}</span>}
            </label>

            {
                questionFormMutation.isSuccess && isSuccessMessage &&
                <span className={style.success}>Спасибо! Мы получили вашу заявку и скоро вам перезвоним.</span>
            }

            {
                questionFormMutation.error && isErrorMessage &&
                <span className={style.error}>Ошибка отправки!</span>
            }

            <label className={
                clsx(
                    style.formFeedback__checkboxLabel,
                    style.formFeedback__checkboxCustomPolicy,
                    errors.privacyPolicy && style.formFeedback__errorCheckbox)
            }>
                <input
                    type="checkbox"
                    {...register('privacyPolicy')}
                    className={style.formFeedback__checkboxInput}
                    hidden
                />
                <span className={style.formFeedback__customCheckbox}></span>
                <span className={style.formFeedback__checkboxText}>
                    Я даю согласие на обработку персональных данных
                </span>
                {errors.privacyPolicy && (
                    <span className={style.formFeedback__error}>{errors.privacyPolicy.message}</span>
                )}
            </label>

            <label className={clsx(
                style.formFeedback__checkboxLabel,
                style.formFeedback__checkboxCustomMarketing)}>
                <input
                    type="checkbox"
                    {...register('marketing')}
                    className={style.formFeedback__checkboxInput}
                    hidden
                />
                <span className={style.formFeedback__customCheckbox}></span>
                <span className={style.formFeedback__checkboxText}>
                    Я даю согласие на рекламно-информационные коммуникации
                </span>
            </label>
            <Button
                label={'Оставить заявку'}
                className={style.formFeedback__submitButton}
            />

        </form>
    )
}
