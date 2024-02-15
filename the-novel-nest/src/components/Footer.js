import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Footer = (props) => {
    return (
        // <div className="footer-container" style={{ background: "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)", display: 'flex', justifyContent: 'space-between' }}>
        <div className="footer-container" style={{ background: "linear-gradient(to bottom, #feada6 0%, #f5efef 100%)", display: 'flex', justifyContent: 'space-between' }}>
            <div className="footer-logo-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                <img src="./images/logo1.png" alt="logo here" height='100px' />
                <p style={{ fontFamily: 'Pacifico, cursive', fontSize: '30px', wordSpacing: '20px', margin: '30px' }}>
                    The Novel Nest
                </p>
            </div>

            <div className="newsletter-container">
                <p style={{ fontFamily: 'Pacifico, cursive', fontSize: '26px', wordSpacing: '20px', margin: '30px' }}>Sign up for our Newsletter!</p>
                <div className="email-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input type='text' placeholder='Your Email' style={{ height: '30px', width: '200px' }} />&nbsp;
                    <button><SendIcon /></button>
                </div>
            </div>

            <div className='social-media-container'>
                <p style={{ fontFamily: 'Pacifico, cursive', fontSize: '26px', wordSpacing: '20px', margin: '30px' }}>Follow us on Social Media!</p>
                <div className='social-media-icons-container' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <InstagramIcon style={{ fontSize: '40px' }} />
                    <YouTubeIcon style={{ fontSize: '40px' }} />
                    <FacebookIcon style={{ fontSize: '40px' }} />
                    <XIcon style={{ fontSize: '40px' }} />
                    <LinkedInIcon style={{ fontSize: '40px' }} />
                </div>

            </div>
        </div>
    )
}

export default Footer;