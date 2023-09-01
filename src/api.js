import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a user by username. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    // console.log("GET USER", res.user);
    return res.user;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    // console.log("GET COMPANY", res.company);
    return res.company;
  }


  /** Get all companies */
  static async getCompanies() {
    let res = await this.request(`companies`);
    // console.log("GET COMPANIES", res.companies);
    return res.companies;
  }

  /** Get all jobs */
  static async getJobs() {
    let res = await this.request(`jobs`);
    // console.log("GET JOBS", res.jobs);
    return res.jobs;
  }

  /** Get companies based on search term. Searching against company name
   *    Finds all partial matches
   *    searchTerm = 'string'
   */
  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies`, { nameLike: searchTerm });
    // console.log("SEARCH COMPANIES", res.companies);
    return res.companies;
  }

  /** Get jobs based on search term. Searching against job title
   *    Finds all partial matches
   *    searchTerm = 'string'
   */
  static async searchJobs(searchTerm) {
    let res = await this.request(`jobs`, { title: searchTerm });
    // console.log("SEARCH JOBS", res.jobs);
    return res.jobs;
  }

  /** Login and retrieve a token
   * Expects credentials like { username, password }
   * Returns true if a token is successfully retrieved
   * Throws exceptions if server returns unexpected responses
  */
  static async login(credentials) {
    let res = await this.request(`auth/token`, credentials, 'post');
    // console.log("LOGIN TOKEN", res.token);
    this.token = res.token;
    return res.token ? true : false;
  }

  /** Register user and retrieve a token
   * Expects userData like { username, password, firstName, lastName, email }
   * Returns true if a token is successfully retrieved
   * Throws exceptions if server returns unexpected responses
   */
  static async register(userData) {
    let res = await this.request(`auth/register`, userData, 'post');
    // console.log("REGISTER TOKEN", res.token);
    this.token = res.token;
    return res.token ? true : false;
  }

}

export default JoblyApi;