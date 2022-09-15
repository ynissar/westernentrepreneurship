import React, { Component } from "react";
import "./Hero.css";
import { Animated } from "react-animated-css";

import { ReactComponent as Blob } from "../../images/blob.svg";
import { ReactComponent as Pictureblob1 } from "../../images/pictureblob1.svg";
import { ReactComponent as Pictureblob2 } from "../../images/pictureblob3.svg";

export default class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Innovate",
    };
  }

  componentDidMount() {
    this.textInterval = setInterval(() => this.tick(), 1900);
  }

  componentWillUnmount() {
    clearInterval(this.textInterval);
  }

  tick() {
    switch (this.state.text) {
      case "Innovate":
        this.setState({
          text: "Produce",
        });
        break;

      case "Produce":
        this.setState({
          text: "Develop",
        });
        break;

      case "Develop":
        this.setState({
          text: "Construct",
        });
        break;

      case "Construct":
        this.setState({
          text: "Invent",
        });
        break;

      case "Invent":
        this.setState({
          text: "Design",
        });
        break;

      case "Design":
        this.setState({
          text: "Innovate",
        });
        break;
    }
  }

  render() {
    return (
      <div className="w-full bg-gradient-to-r from-[#E8F6F8] to-[#F6EDF6] py-[20rem]">
        <div className="flex items-center flex-col">
          {/*header*/}
          <Animated
            animationIn="fadeInUp"
            animationInDuration={2000}
            isVisible={true}
          >
            <p className="text-6xl font-bold pb-6 gradient-text ">
              {this.state.text}
            </p>
          </Animated>
          {/*Description*/}
          <Animated
            animationIn="fadeInUp"
            animationInDuration={1300}
            animationInDelay={1050}
            isVisible={true}
          >
            <p className="text-center max-w-lg text-xl font-bold">
              Western Entrepreneurship Association
            </p>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationInDuration={1300}
            animationInDelay={1100}
            isVisible={true}
          >
            <p className="text-center mt-2 max-w-lg text-lg text-theme">
              Western University's Largest Entrepreneurship Club
            </p>
          </Animated>
          {/*Neumorphic icons*/}
          <div className="flex justify-center space-x-10 mt-10 "></div>
        </div>

        <Animated
          animationIn="fadeIn"
          animationInDuration={2000}
          isVisible={true}
        >
          <Blob className="absolute invisible xl:visible top-12 right-[5rem] w-[17rem] h-[17rem] rotate-[120deg] opacity-90"></Blob>
          <Blob className="absolute invisible xl:visible top-[17.5rem] right-12 w-[5.75rem] h-[5.75rem] "></Blob>
          <Blob className="absolute invisible xl:visible top-[6rem] left-[23.5rem] w-[5.75rem] h-[5.75rem] opacity-70"></Blob>
          <Blob className="absolute invisible xl:visible left-14 w-[13.5rem] h-[13.5rem] rotate-[120deg] opacity-80 top-[38rem]"></Blob>
          <Blob className="absolute invisible xl:visible  left-[18rem] w-[5.75rem] h-[5.75rem] rotate-[120deg] opacity-80 top-[44rem]"></Blob>
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationInDelay={500}
          animationInDuration={2000}
          isVisible={true}
        >
          <Pictureblob2 className="absolute invisible xl:visible top-28 left-0 w-[25rem] h-[25rem]  "></Pictureblob2>
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationInDelay={200}
          animationInDuration={2000}
          isVisible={true}
        >
          <Pictureblob1 className="absolute invisible xl:visible top-[27.5rem] right-[4.5rem] w-[28rem] h-[28rem] 2xl:top-[28rem]"></Pictureblob1>
        </Animated>
        {/* <div className="blob absolute -left-20 w-[24rem] h-[24rem]"></div> */}
      </div>
    );
  }
}
