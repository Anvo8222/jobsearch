import authHeader from "services/auth-header";
import axiosClient from "./axiosClient";

const API_URL = process.env.REACT_APP_API_URL;

const memberApi = {
  getMember() {
    return axiosClient.get(API_URL + "/members/");
  },
  update(data) {
    return axiosClient.patch(API_URL + "/members/", data);
  },
  // get(){
  //     const url=`jobs/${id}`
  //     return axiosClient.get(url)
  // },
  // add(data){
  //     const url='jobs'
  //     return axiosClient.post(url,data)
  // },
  // update(data){
  //     const url=`jobs/${data.id}`
  //     return axiosClient.patch(url,data)
  // },
  // remove(id){
  //     const url=`jobs/${id}`
  //     return axiosClient.delete(url)
  // }
};

export default memberApi;
