import React, { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <main className="max-padd-container my-[99px] chat h-[100%] flex flex-col w-[50%]">
      <div className="messages flex-1 flex-col gap-[20px] overflow-y-scroll">
        <h1 className=" font-semibold">Messages</h1>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/ckwrbf"
            alt=""
          />
          <span className="font-bold">Jagat Pal</span>
          <p>Hey, how's it going???</p>
        </div>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/mrgefn"
            alt=""
          />
          <span className="font-bold">Aishwaria</span>
          <p>Did you check out the latest updates? They're awesome!</p>
        </div>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/hunzeq"
            alt=""
          />
          <span className="font-bold">Karan</span>
          <p>Can you send me the file before noon? Thanks!</p>
        </div>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/ppshfl"
            alt=""
          />
          <span className="font-bold">Anhinav</span>
          <p>Don’t forget to call me when you're free</p>
        </div>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/sgfxbh"
            alt=""
          />
          <span className="font-bold">Zayed</span>
          <p>The project submission deadline is tomorrow.</p>
        </div>
        <div className="message bg-white p-[20px] border rounded-lg flex items-center gap-[20px] cursor-pointer">
          <img
            className="w-[40px] h-[40px] border rounded-[50%] object-cover"
            src="http://surl.li/wenpfy"
            alt=""
          />
          <span className="font-bold">Aman</span>
          <p>Check out this meme! 😂</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox flex-1 bg-white flex flex-col">
          <div className="top bg-gray-300 p-[20px] font-bold flex items-center justify-between ">
            <div className="user flex items-center gap-[20px]">
              <img
                className="w-[30px] h-[30px] border rounded-full object-cover"
                src="http://surl.li/lbpgud"
                alt=""
              />
              Sam
            </div>
            <span
              className="close cursor-pointer"
              onClick={() => setChat(null)}
            >
              X
            </span>
          </div>

          <div className="center overflow-scroll p-[20px] flex flex-col gap-[20px]">
            <div className="chatMessage own flex-end text-right">
              <p>Hey Sam! What's up? 😊</p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                1 hour ago
              </span>
            </div>
            <div className="chatMessage">
              <p>
                {" "}
                Nothing much, just binge-watching this new series on Netflix.
                You?
              </p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                52 mins ago
              </span>
            </div>
            <div className="chatMessage own flex-end text-right">
              <p>Haha, same! Which one are you watching?</p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                50 mins ago
              </span>
            </div>
            <div className="chatMessage">
              <p>It’s called The Midnight Chronicles. So good!</p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                36 mins ago
              </span>
            </div>
            <div className="chatMessage own flex-end text-right">
              <p>Oh, I’ve heard about it! Worth watching?</p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                34 mins
              </span>
            </div>
            <div className="chatMessage">
              <p>Definitely. But warning: you might lose sleep over it. 😂</p>
              <span className=" text-base bg-gray-300 p-[2px] border rounded-lg">
                20 mins
              </span>
            </div>
            <div className="chatMessage own flex-end text-right">
              <p>Need some laughs to survive the week!</p>
              <span className="text-base bg-gray-300 p-[2px] border rounded-lg">
                15 mins
              </span>
            </div>
          </div>

          <div className="bottom border-t-[2px] border-solid border-gray-400 h-[60px] flex items-center justify-between">
            <textarea className="w-[80%] h-[100%] border p-[20px]"></textarea>
            <button className="w-[20%] btn-secondary h-[100%] border-none rounded-xl cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Chat;
