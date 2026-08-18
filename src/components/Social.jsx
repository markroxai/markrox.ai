import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faRss, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons' 
import { faFacebookF, faTwitter, faGithub, faLinkedin, faXingSquare, faSquareXTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons' 

library.add([faTags, faRss, faFacebookF, faTwitter, faGithub, faLinkedin, faEnvelope]); 

const Social = () =>  {
    return (
        <div className="social-icons">
            <ul>
                <li>
                    <a href="/feed.xml"><FontAwesomeIcon icon={['fas', 'rss']} /></a>
                </li>
                <li>
                    <a href="https://x.com/markroxdotdev"><FontAwesomeIcon icon={faXTwitter} /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/markroxdotdev"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/roxberry"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                </li>
                <li>
                    <a href="https://github.com/roxberry"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </li>
                <li>
                    <a href="mailto:blog@markrox.ai"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social