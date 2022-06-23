// 코드 스플리트를 위한 세가지 방법
// 코드 스플리트는 컴포넌트를 불러오는 장소에서 사용한다.
/**
 * 1. 16.8 버전 훅이 생기기 전에 사용했던 방법
 * 2. 16.8 버전 이후에 추가된 방법
 * 3. 관련 모듈을 설치하여 사용하는 방법
 */

const SpliteComp = () => {
  return <button onClick={() => alert("메시지가 출력됩니다")}>버튼을 누르세요</button>;
};

export default SpliteComp;
