import wepy from 'wepy';
import inaver from '../components/inaver/inaver';

export default class index extends wepy.page {
    components = {
        inaver
    }
    data = {
      
    }
    methods = {
        goto(router){
            wx.navigateTo({
                url: '/pages/'+ router + '/index',
            })
        }
    }

}