import { useState } from "react";
//  설치한 라이브러리 들고옴
import loadable from "@loadable/component";
// loadable을 이용하여 가져올 comp를 import 함
// 가져올때 글자를 호출하고 싶다면 fallback을 이용해서 호출 가능
const SpliteComp = loadable(() => import("./SpliteComp"), { fallback: <div>Loading</div> });

const LoadableComp = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>LoadableComp 를 통해 가져오기</h1>
      <button onClick={() => setVisible(true)}>버튼을 눌르면 호출합니다</button>
      {/** SpliteComp를 호출하면 loadable을 통해 호출 */}
      {visible && <SpliteComp />}
    </div>
  );
};
export default LoadableComp;
