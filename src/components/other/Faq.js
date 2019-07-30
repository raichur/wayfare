import React, { Component } from 'react'

class Faq extends Component {
    render() {
        return (
            <div className="faq">
                <h1>FAQ</h1>
                <h3>What is Wayfare?</h3>
                <p>Wayfare is a simple app made to help you easily calculate your discretionary income. It's tailored for nomads and prople who work remotely and travel often, hence the name.</p>
                <p>
                    You tell Wayfare your monthly income and fixed monthly expenses, and Wayfare will show you how much you have left to safely use. 
                    You can add multiple cities with different monthly expenses, and Wayfare will do the math for you. 
                    Want to extrapolate the data to see how much you can use for a different time interval (e.g. 3 months or 1 year)? Wayfare can do that too.
                </p>
                <p><b>That's about it.</b> There's not much to it. It's just a tool I personally needed but didn't find. So I made it myself.</p>
                <h3>Can I modify my monthly income and other details?</h3>
                <p>
                    Yup. When you're signed in, just click on the icon with your initials on the top right corner.
                </p>
                <h3>Is the data in Wayfare encrypted?</h3>
                <p>Currently, the only information that is encrypted is your password. Everything else is stored as-is.
                    However, Wayfare does not collect or store any sensitive data like bank info or credit card details. 
                    I am working on end-to-end encryption.
                </p>
                <p>If you found a bug or have any other questions, feel free to <a href="mailto:raichur@utexas.edu?subject=I found a bug in Wayfare">get in touch</a>.</p>
            </div>
        )
    }
}

export default Faq
