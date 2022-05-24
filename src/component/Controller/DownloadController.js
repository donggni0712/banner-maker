import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import './download.css'

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
        <button className='download_button' onClick={onDownloadBtn}>배너 다운로드</button>
        </div>
}

export default Download;