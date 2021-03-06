import Taro, { Component } from '@tarojs/taro'
import { AtGrid } from "taro-ui"
export default class MyMenuBar extends Component {
    handleClick=()=>{
        Taro.navigateTo({url:'../user/login'})
    }
    render(){
        return (
            <AtGrid
                columnNum={4}
                hasBorder={false}
                onClick={this.handleClick}
                data={
                [
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '求职'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '招聘'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '实习'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '双选会'
                  }
                ]
              }
              />
        )
    }
}