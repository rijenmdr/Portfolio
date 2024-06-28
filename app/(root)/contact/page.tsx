import ContactDetail from "@/container/contact/ContactDetail"
import ContactForm from "@/container/contact/ContactForm"

type Props = {}

const ContactPage = ({ }: Props) => {
    return (
        <section className='mt-4 md:mt-8 flex justify-start md:justify-center gap-10 lg:gap-20 items-start md:items-center flex-col lg:flex-row min-h-[100%] md:min-h-[72dvh]'>
            <ContactDetail />

            <ContactForm />
        </section>
    )
}

export default ContactPage