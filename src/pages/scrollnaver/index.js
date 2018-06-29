import wepy from 'wepy';
import inaver from '../../components/inaver/inaver';

export default class scrollinaver extends wepy.page {
    components = {
        inaver
    }
    data = {
        protectInaver: false,
        background: 'rgba(70,62,77, 0)',
        readyBack: 'rgba(70,62,77,',
        fullValue: 100
    }
    methods = {
        scrolling(e) {
            let scrollTop = e.detail.scrollTop;
            if (scrollTop < this.fullValue) {
                let a = (scrollTop % this.fullValue) / this.fullValue;
                this.background = this.readyBack + a.toFixed(2).toString() + ')';
            }
        }
    }
}
