import {Alert} from 'react-native'
import app_json from '../../../app.json';

export const MODIFIED_SELF_INTRO = 'MODIFIED_SELF_INTRO';
export const FETCH_UNIV_PROJECTS = 'FETCH_UNIV_PROJECTS'
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const GET_USER_PROJECT = 'GET_USER_PROJECT';


const REQUEST_URL = app_json.REQUEST_URL || "http://localhost:9000";
const methodPut = {
  method: 'put',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
}

const methodGet = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}


export const isModifiedIntro = (email, selfIntro) => (dispatch) => {
  fetch(`${REQUEST_URL}/user/setting/intro/${email}`, {
    ...methodPut,
    body: JSON.stringify({ selfIntro }),
  })
  .then(res => dispatch({type: MODIFIED_SELF_INTRO, selfIntro}))
  .catch(err => console.log(err))
}

export const isModifiedProject = (projects, user) => (dispatch) => {
  let { name, startedY, startedM, exitedY, exitedM} = projects;
  let project = { name, startedY, startedM, exitedY, exitedM }
  fetch(`${REQUEST_URL}/user/projects/${user}`, {
    ...methodPut,
    body: JSON.stringify({ ...project }),
  })
  .then(res => dispatch({type: SAVE_PROJECT, ...projects}))
  .catch(err => console.log(err))
}
export const isGetUsersProjects = (user) => (dispatch) => {
  fetch(`${REQUEST_URL}/user/projects/${user}`,{ ...methodGet })
  .then(res => res.json())
  .then(res => dispatch({type: GET_USER_PROJECT , projects: res}))
  .catch(err => console.log(err))
}

export const isFetchUnivProjects = (univ) => (dispatch) => {
  fetch(`${REQUEST_URL}/projects/${univ}`,{ ...methodGet })
  .then(res => res.json())
  .then(res => dispatch({type: FETCH_UNIV_PROJECTS , projects: res.univProjects}))
  .catch(err => console.log(err))
}
