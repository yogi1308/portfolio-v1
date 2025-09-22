import styles from './contact.module.css'
import DotBg from "../../background/DotBg"
import AvatarMessage from "./AvatarMessages"
import { useState } from 'react'

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = () => {
        setIsSubmitting(true)
        // Formspree will handle the actual submission
        setTimeout(() => {
            setIsSubmitted(true)
            setIsSubmitting(false)
        }, 1000)
    }

    if (isSubmitted) {
        return (
            <div className={`section-margin ${styles.contactSection}`} id="contactMe">
                <DotBg />
                <h2 className={`big-font`}>Thank You!</h2>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
                <button onClick={() => setIsSubmitted(false)}>Send Another Message</button>
            </div>
        )
    }

    return(
        <div className={`section-margin ${styles.contactSection}`} id="contactMe">
            <DotBg />
            <h2 className={`big-font`} >
                Contact Me
            </h2>
            <form
                action="https://formspree.io/f/mpwyazew"
                method="POST"
                className={`${styles.form} flex-vert`}
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="_subject" value="New contact from portfolio" />
                <input type="hidden" name="_next" value="javascript:void(0)" />
                
                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        placeholder='John Doe'
                        required
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder='example@gmail.com'
                        required
                    />
                </div>
                <div>
                    <p>Message</p>
                    <textarea
                        name="message"
                        placeholder='Enter your message here'
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </form>
            < AvatarMessage />
            <div className={`${styles.avatarBox}`} ></div>
        </div>
    )
}