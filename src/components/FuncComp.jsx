import React, { useState } from "react";
// React.lazy를 사용하여 화면에 출력될때 (호출될 때) 가져올 수 있다
// lazy를 사용하는 부분을 Suspense 태그로 감싸서 사용
import { Suspense } from "react";
// import로 comp 호출
const SpliteComp = React.lazy(() => import("./SpliteComp"));

const FuncComp = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <h1>함수형 컴포넌트에서 컴포넌트를 호출하기</h1>
      <button onClick={onClick}>버튼을 누르면 호출합니다</button>
      {/**Suspense로 감싸서 사용 */}
      <Suspense fallback={<div>Loading</div>}>{visible && <SpliteComp />}</Suspense>
    </div>
  );
};
export default FuncComp;
