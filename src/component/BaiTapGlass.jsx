import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const BaiTapGlass = () => {
  const [glasses, setGlasses] = useState("v1.png");
  const [name, setName] = useState("GUCCI G8850U");
  const [desc, setDesc] = useState(
    "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  );

  const arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "../../public/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "../../public/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "../../public/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "../../public/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "../../public/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "../../public/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "../../public/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "../../public/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "../../public/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  return (
    <>
      <div className="container background">
        <div className="content">
          <div className="title-content text-center p-14">
            <h3 className="text-black text-5xl">TRY GLASSESS APP ONLINE</h3>
          </div>
          <div className="model-content flex justify-center gap-60 m-10">
            <div className="img-desc">
              <img
                className="glasses"
                src={`./public/glassesImage/${glasses}`}
                width={140}
                alt=""
              />
              <div className="descc-content">
                <img src="./public/glassesImage/model.jpg" width={250} alt="" />
                <div className="desc">
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
            <div>
              <img src="./public/glassesImage/model.jpg" width={250} alt="" />
            </div>
          </div>
          <div className="glassess-group bg-white mx-auto my-15 w-3/4 flex flex-wrap gap-5 p-10 justify-center">
            {arrGlasses.map((item, index) => {
              let { url, name, desc } = item;
              return (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setGlasses(url);
                    setName(name);
                    setDesc(desc);
                  }}
                  className="bg-white py-2 px-3 rounded-md"
                >
                  <img src={url} width={100} alt="" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BaiTapGlass;
