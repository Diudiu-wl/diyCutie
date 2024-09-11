import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// 图片资源的路径
const bodyImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/body2.png` },
];

// 对应 body 1 的选项
const body1ColorImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/color1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/color2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/color3_body1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/color4_body1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/color5_body1.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/color6_body1.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/color7_body1.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/color8_body1.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/color9_body1.png` },
 
];

const body1EyeImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body1.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/eye6_body1.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/eye7_body1.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/eye8_body1.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/eye9_body1.png` },
  { id: 10, src: `${process.env.PUBLIC_URL}/images/eye10_body1.png` },
  { id: 11, src: `${process.env.PUBLIC_URL}/images/eye11_body1.png` },
];

const body1MouthImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/mouth3_body1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/mouth4_body1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/mouth5_body1.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/mouth6_body1.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/mouth7_body1.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/mouth8_body1.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/mouth9_body1.png` },
  { id: 10, src: `${process.env.PUBLIC_URL}/images/mouth10_body1.png`},
  { id: 11, src: `${process.env.PUBLIC_URL}/images/mouth11_body1.png` },
  { id: 12, src: `${process.env.PUBLIC_URL}/images/mouth12_body1.png` },
  { id: 13, src: `${process.env.PUBLIC_URL}/images/mouth13_body1.png`},
];

const body1ClothImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body1.png` },
];

// 对应 body 2 的选项
const body2ColorImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/color1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/color2_body2.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/color3_body2.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/color4_body2.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/color5_body2.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/color6_body2.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/color7_body2.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/color8_body2.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/color9_body2.png` },
 
];

const body2EyeImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body2.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body2.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body2.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body2.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/eye6_body2.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/eye7_body2.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/eye8_body2.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/eye9_body2.png` },
  //{ id: 10, src: `${process.env.PUBLIC_URL}/images/eye10_body2.png` },
];

const body2MouthImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body2.png` },
];

const body2ClothImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body2.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body2.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body2.png` },
];

function App() {
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedEyes, setSelectedEyes] = useState(null);
  const [selectedMouth, setSelectedMouth] = useState(null);
  const [selectedClothes, setSelectedClothes] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [aboutImage, setAboutImage] = useState(null);  // 新增的状态，用于显示作者图片

  const canvasRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAbout && !event.target.closest(".about-author-container")) {
        setShowAbout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAbout]);

  // 根据 selectedBody 动态加载选项

  const getColorImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1ColorImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2ColorImages;
    return [];
  };

  const getEyeImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1EyeImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2EyeImages;
    return [];
  };

  const getMouthImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1MouthImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2MouthImages;
    return [];
  };

  const getClothImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1ClothImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2ClothImages;
    return [];
  };

  // 判断是否禁用嘴巴选项
  const isMouthDisabled = () => {
    return selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`;
  };

  // 绘制选中的身体部位到canvas
  const drawToCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 清空canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const images = [selectedBody, selectedColor, selectedEyes, selectedMouth, selectedClothes];
    images.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }
    });
  };

  // 保存canvas为图片
  const saveImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    // 创建一个虚拟的链接来下载图片
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated-image.png"; // 下载的文件名
    link.click();
  };

  useEffect(() => {
    if (selectedBody || selectedColor || selectedEyes || selectedMouth || selectedClothes) {
      drawToCanvas();
    }
  }, [selectedBody, selectedColor, selectedEyes, selectedMouth, selectedClothes]);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    if (!showAbout) {
      setAboutImage(`${process.env.PUBLIC_URL}/images/author.jpeg`);  // 替换为你的图片路径
    } else {
      setAboutImage(null);  // 隐藏图片
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h3>请选择物种</h3>
        <div className="row">
          {bodyImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`body ${image.id}`}
              onClick={() => {
                setSelectedBody(image.src);
                setSelectedColor(null);
                setSelectedEyes(null);
                setSelectedMouth(null);
                setSelectedClothes(null);
              }}
              className="image-item"
            />
          ))}
        </div>

        {selectedBody && (
          <>
          <h3>请选择颜色</h3>
            <div className="row">
              {getColorImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`eye ${image.id}`}
                  onClick={() => setSelectedColor(image.src)}
                  className="image-item"
                />
              ))}
            </div>
            <h3>请选择眼型</h3>
            <div className="row">
              {getEyeImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`color ${image.id}`}
                  onClick={() => setSelectedEyes(image.src)}
                  className="image-item"
                />
              ))}
            </div>

            <h3>请选择嘴型</h3>
            <div className="row">
              {/* No Mouth Icon 放在最前面 */}
              
              {selectedBody !== `${process.env.PUBLIC_URL}/images/body1.png` && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/none-icon.png`}  //none-icon.png
                  alt="No Mouth Icon"
                  onClick={() => setSelectedMouth(null)} // Click to hide mouth
                  className="image-item"
                />
              )}

              {!isMouthDisabled() && getMouthImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`mouth ${image.id}`}
                  onClick={() => setSelectedMouth(image.src)}
                  className="image-item"
                />
              ))}

              
            </div>

            <h3>请选择头饰</h3>
            <div className="row">
              <img
                  src={`${process.env.PUBLIC_URL}/images/none-icon.png`}  //none-icon.png
                  alt="No Cloth Icon"
                  onClick={() => setSelectedClothes(null)} // Click to hide cloth
                  className="image-item"
              />
              {getClothImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`clothes ${image.id}`}
                  onClick={() => setSelectedClothes(image.src)}
                  className="image-item"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="right-panel">
        <div className="display-box">
          {/* 隐藏的canvas用于合成图像 */}
          <canvas ref={canvasRef} width={200} height={200} style={{ display: "none" }}></canvas>
          {/* 显示最终的选中图像 */}
          {selectedBody && <img src={selectedBody} alt="Selected Body" className="selected-part" />}
          {selectedColor && <img src={selectedColor} alt="Selected Color" className="selected-part" />}
          {selectedEyes && <img src={selectedEyes} alt="Selected Eyes" className="selected-part" />}
          {selectedMouth && <img src={selectedMouth} alt="Selected Mouth" className="selected-part" />}
          {selectedClothes && <img src={selectedClothes} alt="Selected Clothes" className="selected-part" />}
        </div>

        {/* 新增的保存按钮 */}
        <button onClick={saveImage} className="save-button">
          保存图像
        </button>
      </div>

      <div className="about-author-container">
      <button onClick={handleAboutClick} className="about-button">
          关于作者
        </button>
        {showAbout && (
          <div className="about-info">
          <p>tapioca :</p>
          {aboutImage && <img src={aboutImage} alt="About the Author" className="about-image" />}  {/* 图片显示 */}
          {/*<p>tapioca</p>*/}
          <p>日常破防的鱿鱼。</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
