import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import './download.css'
import { Button } from 'react-bootstrap';
function Download({filename}){

       const onDownloadBtn = () => {
        const banner = document.querySelector('.banner_box')
        domtoimage
        .toBlob(banner)
        .then((blob) => {
            saveAs(blob, `${filename}.png`);
        });
    }

    return  <div className='download_box'>
         <Button variant="primary" style={{width:"15rem"}} onClick={onDownloadBtn}>
                                배너 다운로드
        </Button>
        </div>
}

export default Download;