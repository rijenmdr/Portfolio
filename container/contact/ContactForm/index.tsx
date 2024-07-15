"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { validationSchema } from "./validationSchema"
import { Button } from "@/components/common"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactMessage } from "@/sanity/sanity.mutation"

type Props = {}

const ContactForm = ({ }: Props) => {
    const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    async function onSubmit(values: z.infer<typeof validationSchema>) {
        try {
            await sendContactMessage(values);
            form.reset();
            toast("Your contact message has been sent successfully.", {
                description: "Will contact you as soon as possible.",
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-full md:w-[650px] linear-gradient p-8 md:p-20 lg:p-16 rounded-sm flex flex-col justify-between flex-wrap gap-4'>
            <h3 className="heading-5 md:heading-4 uppercase text-white">
                Any Project ?
            </h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        <div className="col-span-2 lg:col-span-1">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-2">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <Button disabled={form.formState.isSubmitting} isLoading={form.formState.isSubmitting} type="submit" label="Submit Now" />
                </form>
            </Form>
        </div>
    )
}

export default ContactForm