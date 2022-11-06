import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
                'Bearer i6VCk-6PfEr9Iwx_v1o3oAI-8sdFXQN4MpEFh-AAjHAKiIKPwndAuKBoF_z9DT9Zt6LDFfMEH1G5H8uDhEMrZq5lXeRamDZD8DOCrXhvZze6L3USRkb7SGYb1koPY3Yx'
    }
});
