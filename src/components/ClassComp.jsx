// 1. 16.8버전 이전에 클래스형 컴포넌트에서 코드 스플리트 방법

import { Component } from "react";

class ClassComp extends Component {
  // comp를 담아올 state를 만든다
  state = {
    SpliteComp: null,
  };
  handleClick = () => {
    // import를 통해서 comp를 받아오고
    // import를 통해서 받아온 comp는 promise로 들고오기 때문에 then으로 처리한다.
    import("./SpliteComp").then(({ default: SpliteComp }) => {
      this.setState({ SpliteComp });
    });
  };

  render() {
    const { SpliteComp } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>버튼을 누르세요</button>
        {/**  SpliteComp 값이 들어가 있다면 값이 출력될수 있도록 작성 */}
        {SpliteComp && <SpliteComp />}
      </div>
    );
  }
}

export default ClassComp;
