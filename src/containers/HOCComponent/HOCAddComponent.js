import React, { Component } from "react" 

const HOCAddProps = (WrappedComponent, { ...rest }) =>
    class extends Component {
        render() {
            const newProps = {
                ...rest
            } 

            return <WrappedComponent { ...newProps } { ...this.props } /> 
        }
    } 
//FIXME: decorator中无法添加参数
@HOCAddProps
class AddComponent extends Component {
    handle = e => {
        const { news, uid } = this.props;
        console.log(news);
        console.log(uid);
    };

    render() {
        this.handle();
        return <div>添加props</div>;
    }
}

class HOCAddComponent extends Component {
    render() {
        // const NewComponent = HOCAddProps(AddComponent, {uid: '00000'});

        return <AddComponent news={"newsweb"} />;
    }
}

export default HOCAddComponent
