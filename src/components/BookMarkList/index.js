import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import './index.css'
import './index.css'

const BookMarkList = (props) => {
    const {markList} = props
    const {title, custom_link, job_location_slug, whatsapp_no, salary_max, salary_min, creatives} = markList
    return (
        <>
            <div className="card-container">
                <img src={creatives[0].thumb_url} alt="thumb_url" className="thumb-image" />
                <div>
                    <h1 className="job-title">{title}</h1>
                    <div className="phone-info-container">
                        <p className="job-tel-number">{custom_link}</p>
                        <div className="whatsapp-container">
                            <FaWhatsapp size={20} color={"#25D366"} />
                            <p className="whatsapp-number">{whatsapp_no}</p>
                        </div>
                    </div>
                    <div className="location-container">
                        <FaLocationDot color={"#FF0000"} size={20}/>
                        <p className="job-location">{job_location_slug}</p>
                    </div>
                    <div className="salary-container">
                        <MdOutlineAttachMoney color={"#25D366"} size={20} />
                        <p className="salary-amount">{salary_min} - {salary_max}</p>
                    </div>
                </div>
                <div className="book-mark-container">
                    <BsBookmarkFill size={20} />
                </div>
            </div>
        </>
    )
}

export default BookMarkList