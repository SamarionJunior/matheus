import axios from "axios";

import { Api } from "../config.js";

export default axios.create({
    baseURL: Api.url
    // baseURL: 'http://localhost:3030'
})