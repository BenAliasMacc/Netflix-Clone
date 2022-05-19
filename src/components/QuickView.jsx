import './QuickView.scss'
import CancelIcon from '@material-ui/icons/Cancel';

export const QuickView = ({bannerStyle, movie, popup, popupStatut }) => {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
        <div className="quickView__banner" style={bannerStyle} >
            <div className="quickView__content">
                <h3 className="quickView__title">{movie?.title || movie?.original_title || movie?.name}</h3>
                <p>{movie?.overview}</p>
            </div>
            <button className='quickView__close' onClick={popup} ><CancelIcon fontSize='large' /></button>
        </div>  
    </div>
  )
}
