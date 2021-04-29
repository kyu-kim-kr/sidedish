import { createContext, useState, useMemo } from "react";

const SideDishContext = createContext({
  isModalVisible: null,
  setIsModalVisible: () => {},
  currProductData: null,
  setCurrProductData: () => {},
  sildeData: null,
  setSlideData: () => {},
});

const SideDishStore = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Detail(Modal) 상태 (보이기 / 숨김)
  const [currProductData, setCurrProductData] = useState(null); // Detail(Modal)에 들어갈 데이터 (해쉬 값 or 고유 키 값)
  const [sildeData, setSlideData] = useState(null);   // Detail(Modal)의 하단에 보여질 슬라이더 데이터들

  const value = useMemo(
    () => ({
      isModalVisible, setIsModalVisible,
      currProductData, setCurrProductData,
      sildeData, setSlideData,
    }),
    [
      isModalVisible, setIsModalVisible,
      currProductData, setCurrProductData,
      sildeData, setSlideData,
    ]
  );

  return (
    <SideDishContext.Provider value={value}>
      {children}
    </SideDishContext.Provider>
  );
};

export { SideDishStore, SideDishContext };
