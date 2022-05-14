import React from "react";
import photo from "../Assets/cake.jpg";
import gif from "../Assets/dance.gif";

function Front() {
  return (
    <div className="w-full">
      <div class="card w-85 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={photo} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">🥳HAPPY BIRTHDAY MOMO🥳</h2>
          <p>I Dont have Gift for You but I have Something say🥺</p>
          <div class="card-actions">
            <a href="#my-modal-2" class="btn">
              🎁
            </a>
            <div class="modal" id="my-modal-2">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Here is Message for You 🥺</h3>
                <p class="py-4">
                  One Year ago I tried to write something about use us but then
                  we are just started now its been 1 and half year how should
                  the year full of memories and kisses and hugs our failed try
                  to explore food in city and eating same food for straight one
                  year.I promised You to make your next Birthday and life
                  unforgettable. I wish you great year Ahead "Patkan Ikde Ye".
                </p>
                <img
                  src="https://media.giphy.com/media/K8Y0XxbCRcMxbaBKWg/giphy.gif"
                  class="items-center text-center"
                />
                <div class="modal-action items-center">
                  <a href="#" class="btn">
                    lobe You Dukku🥳
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
