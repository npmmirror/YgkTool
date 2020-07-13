import React from 'react'
import { Link } from "react-router-dom"
import applist from '../../utils/applist'

//栏目下工具组
const MakeChips = ({ apps }) => {
    const ChipTag = ({ text }) => (
        <div className="mdui-chip mdui-text-color-theme-text">
            <span className="mdui-chip-title">{text}</span>
        </div>
    )
    return apps.map(a => {
        if (!a) return null;
        return (
            a.channel === 5 ?
                <a target="_blank" rel="no_reffer" href={a.link}>
                    <ChipTag text={a.name}></ChipTag>
                </a>
                :
                <Link key={a.link} to={"/app/" + a.link}>
                    <ChipTag text={a.name}></ChipTag>
                </Link>
        )
    })
}

//分类栏目
const MakeChannels = ({ data }) => {
    const { name, apps, icon } = data;
    return (
        <>
            <div className="channel mdui-card mdui-p-a-1">
                <li className="mdui-list-item">
                    <i className="mdui-list-item-icon mdui-icon material-icons">{icon}</i>
                    <div className="mdui-list-item-content">
                        <div className="mdui-list-item-title">{name}</div>
                    </div>
                </li>
                <MakeChips apps={apps} />
            </div>
            <br></br>
        </>
    )
}

const getChannelName = index => {
    const channels = ['AI人工智能', '图片视频', '编程开发', '生活常用', "第三方工具&友情链接"]
    return channels[index - 1]
}

const getChannelIcon = index => {
    const icons = ['brightness_auto', 'photo', 'code', 'brightness_7', "link"]
    return icons[index - 1]
}

/********发现*********/
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        var channelType = []
        for (let i = applist.length - 1; i >= 0; i--) {
            let app = applist[i];
            if (!channelType.includes(app.channel)) {
                channelType.push(app.channel)
            }
        }

        var data = channelType.map(channel => ({
            name: getChannelName(channel),
            icon: getChannelIcon(channel),
            apps: applist.filter(app => app.channel === channel)
        }))

        return data.map((a, i) => (<MakeChannels key={i} data={a} />))
    }
}
