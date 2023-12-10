import { Link } from 'react-router-dom';
import './Privacy.css'
const PrivacyPolicy = () => {
    return (
        <div className='Privacy-PolicyHeader'>
          <title>Privacy Policy</title>
              <h3 className="privacy-policy">Privacy Policy</h3>
              <div className="privacy">
                <h3 className="privacyIntroduction">Introduction</h3>
                <p className='Introduction-paragraph'>This privacy policy outlines the types of personal information that is received and collected and how it is used. This Privacy Policy is reviewed and revised from time to time. Your use of this site, in any and all forms, constitutes an acceptance of this privacy policy.</p>
              </div><br />
              <div className="privacy">
                <h3 className="privacyIntroduction">What Information We Collect ?</h3>
                <p className='Introduction-paragraph'>We use log files like many other websites. The information in the log files include: Internet Protocol addresses (IP), Types of browser, Internet Service Provider (ISP), Date and time stamp, Referring and exit pages, Number of clicks. All of this information is not linked to anything that is personally identifiable.</p>
              </div><br />
              <div className="privacy">
                <h3 className="privacyIntroduction">Cookies</h3>
                <p className='Introduction-paragraph'>We use cookies to store information about visitor preferences and to record user-specific information on visits and pages the user views so as to provide a custom experience. In regard to third-party advertisers, this site has no access or control over these cookies. You should review the respective privacy policies on any and all third-party ad servers for more information regarding their practices and how to opt-out. Google, a third party vendor, uses the DART cookie to serve ads on this website. Users may opt out of the use of the DART cookie by visiting Google’s Content Network Privacy Policy.</p>
              </div><br /><br />
              <div className="privacy">
                <h3 className="privacyIntroduction">Google Analytics</h3>
                <p className='Introduction-paragraph'>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.</p>
              </div><br /><br />
              <div className="privacy">
                <h3 className="privacyIntroduction">Third Party Links</h3>
                <p className='Introduction-paragraph'>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.</p>
              </div><br /><br />
              <div className="privacy">
                <h3 className="privacyIntroduction">Contact Us</h3>
                <p className='Introduction-paragraph'>If you have any questions about this Privacy Policy, please contact us via contact form.<Link to='/contact'>contact form.</Link></p>
              </div>
            
        </div>
    );
};

export default  PrivacyPolicy;