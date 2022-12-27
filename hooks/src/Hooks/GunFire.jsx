import React,{Component} from "react";
export default class GunFire extends Component {
    state = {
        gunshorts:0
    };
    handleGunshorts = () => {
        this.setState({gunshorts: this.state.gunshorts+1});

    };
    render() {
        return (
            <>
            <h3 onMouseOver={this.handleGunshorts}>
            GunFire Gunshorts:{this.state.gunshorts}</h3>
            </>
        );
    }
}