import styles from './contact.module.css'
import DotBg from "../../background/DotBg"

export default function Contact() {
    return(
        <div className={`section-margin ${styles.contactSection}`}>
            <DotBg />
            <h2 className={`big-font`} >
                Contact Me
            </h2>
            <form action="" className={`${styles.form} flex-vert`}>
                <div>
                    <p>Name</p>
                    <input type="text" placeholder='John Doe' />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" placeholder='example@gmail.com' />
                </div>
                <div>
                    <p>Message</p>
                    <textarea placeholder='Enter your message here' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}