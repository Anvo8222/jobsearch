import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import memberApi from "../../api/memberApi";
import authHeader from "services/auth-header";

ViewCv.propTypes = {
  currentUser: PropTypes.object,
};

function ViewCv({ currentUser }) {
  const [memberCurrent1, setMemberCurrent1] = useState({});
  const [isShowEditTitle, setIsShowEditTitle] = useState(false);
  const [isShowPosition, setIsShowPosition] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowEditSkill, setIsShowEditSkill] = useState(false);
  // input
  const [inputSkill, setInputSkill] = useState();
  const handleShowEditTitle = () => {
    setIsShowEditTitle(!isShowEditTitle);
  };
  const handleShowEditPosition = () => {
    setIsShowPosition(!isShowPosition);
  };
  const handleShowEditEducation = () => {
    setIsShowEducation(!isShowEducation);
  };
  const handleShowEditSkill = () => {
    setIsShowEditSkill(!isShowEditSkill);
  };
  const token = authHeader().Authorization;
  console.log("token", token);
  useEffect(() => {
    memberApi.getMember().then((response) => {
      setMemberCurrent1(response);
    });
  }, []);
  //button
  const onSaveSkills = () => {
    const newInputSkills = inputSkill.split(",");
    memberApi.update({
      // ...memberCurrent1,
      resume: newInputSkills,
    });
    console.log("memberCurrent2", memberCurrent1);
  };

  const updateMemvber = () => {
    // button
    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     const topJobs = await jobApi.getAll();
    //     setJobs(topJobs);
    //     setIsLoadding(false);
    //   };
    //   fetchProducts();
    // }, []);
    // {
    //   "resume": "test",
    //   "salary": 1234,
    //   "currency": "VND",
    //   "birthday": "2000-12-24",
    //   "member_educations": [
    //       {
    //           "degree_name": "test",
    //           "major": "test",
    //           "university_name": "test",
    //           "gpa": 3.0,
    //           "starting_date": "2020-04-07",
    //           "completion_date": "2022-04-07"
    //       },
    //       {
    //           "degree_name": "test 2",
    //           "major": "tes 23t",
    //           "university_name": "test2323",
    //           "gpa": 4.0,
    //           "starting_date": "2020-04-07",
    //           "completion_date": "2022-04-07"
    //       }
    //   ],
    //   "member_experiences": [
    //       {
    //           "job_title": "test",
    //           "company_name": "sdfsdf",
    //           "job_location": "sdfsdfsdf",
    //           "job_state": true,
    //           "job_country": "Vietnam",
    //           "description": "eftewrt",
    //           "start_date": null,
    //           "end_date": null
    //       }
    //   ],
    //   "member_skills": [
    //       {
    //           "name": "sdfsdf",
    //           "description": "sdfsdf"
    //       }
    //   ],
    //   "member_social_activities": [
    //       {
    //           "title": "ertert",
    //           "unit_name": "ertert",
    //           "description": "ertertertert",
    //           "starting_date": "2022-04-07",
    //           "completion_date": "2022-04-26"
    //       }
    //   ],
    //   "member_certificates": [
    //       {
    //           "name": "ertert",
    //           "year": 2000
    //       }
    //   ]
    // }
  };
  return (
    <>
      <div className="w-[64%] mx-auto p-[20px] rounded border-2 border-solid border-border relative">
        <div className="absolute right-[0]">
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <p className="text-primary">Tải bản mẫu CV</p>
          </div>
          <div className="block">
            <p>Cài đặt bảo mật cho CV</p>
            <div className="flex">
              <input
                className="mt-[7px] mr-[2px]"
                type="radio"
                value="Male"
                name="gender"
              />
              <p>Công khai</p>
            </div>
            <div className="flex">
              <input
                className="mt-[7px] mr-[2px]"
                type="radio"
                value="Female"
                name="gender"
              />
              <p>Riêng tư</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h3>Nguyen An</h3>
        </div>
        <p className="font-bold">Tiêu đề</p>
        <p className="mb-[4px]">
          Địa chỉ:
          {currentUser.address ? currentUser.address : "Chưa có thông tin!"}
        </p>
        {isShowEditTitle ? (
          <input
            type="text"
            className="mb-2 max-w-[30%]"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Vui lòng nhập nhập đúng email"
            required
            placeholder="Email"
          />
        ) : (
          <p className="mb-[4px]">{currentUser?.email}</p>
        )}

        {isShowEditTitle ? (
          <input
            type="number"
            pattern="(\+84|0)\d{9,10}"
            title="Nhập số điện thoại từ 10 đến 11 số"
            required
            className="mb-2 max-w-[30%]"
            placeholder="Số điện thoại"
          />
        ) : (
          <p className="mb-[4px]">
            Số điện thoại:{" "}
            {currentUser?.phone_number
              ? currentUser?.phone_number
              : "Chưa có thông tin"}
          </p>
        )}

        <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
          <input value="" placeholder="Kinh nghiệm làm việc" />
          <div className="flex">
            {/* save title */}
            {isShowEditTitle ? (
              <span className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] cursor-pointer px-[14px]">
                Save
              </span>
            ) : (
              false
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={() => handleShowEditTitle()}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">Chức vụ</p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={() => handleShowEditPosition()}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
        {isShowPosition ? (
          <input className="block px-1 py-[1px] mb-[2px]" />
        ) : (
          <p>
            Vị trí ứng tuyển:{" "}
            {currentUser?.specialized
              ? currentUser?.specialized
              : "Chưa có thông tin!"}
          </p>
        )}
        {isShowPosition ? (
          <input className="block px-1 py-[1px] mb-[2px]" />
        ) : (
          <p>
            Thời gian:{" "}
            {currentUser?.time ? currentUser?.time : " Chưa có thông tin!"}
          </p>
        )}

        <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
          <input value="" placeholder="Học vấn" />
          {/* chuc vu */}
          <div className="flex">
            {isShowPosition ? (
              <span className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] cursor-pointer px-[14px]">
                Save
              </span>
            ) : (
              false
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">Học vấn</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick={() => handleShowEditEducation()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        {isShowEducation ? (
          <input
            type="text"
            placeholder="input"
            className="px-1 mb-[14px] max-w-[20%]"
          />
        ) : (
          <p>
            Tên trường học :{" "}
            {currentUser?.school_name
              ? currentUser?.school_name
              : " Chưa có thông tin!"}
          </p>
        )}
        {isShowEducation ? (
          <input
            type="text"
            placeholder="input text"
            className="px-1 mb-[14px] max-w-[20%]"
          />
        ) : (
          <p>
            Thời gian:{" "}
            {currentUser?.time_School
              ? currentUser?.time_School
              : "Chưa có thông tin!"}
          </p>
        )}

        <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
          <input value="" placeholder="Kỹ năng" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">Kỹ năng!</p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {isShowEditSkill ? (
            <input
              onChange={(e) => setInputSkill(e.target.value)}
              type="text"
              placeholder="input skills"
              className="px-1 mb-[14px] max-w-[20%]"
            />
          ) : (
            <p>
              {currentUser?.skill ? currentUser?.skill : "Chưa có thông tin"}
            </p>
          )}

          <div className="flex items-center">
            {/* button edit skill */}
            {isShowEditSkill ? (
              <span
                onClick={() => onSaveSkills()}
                className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
              >
                Save
              </span>
            ) : (
              false
            )}
            <svg
              onClick={() => handleShowEditSkill()}
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCv;
