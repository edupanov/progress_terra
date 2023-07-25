import {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {BonusesInterface} from "../Bonuses.interface";
import {Config} from "../../../../../api/config";
import {headers, requestData} from "../../../../../api/request";
import {Urls} from "../../../../../api/urls";

export const useBonusesData = () => {
    const [data, setData] = useState({} as BonusesInterface);

    const fetchBonusesData = async () => {
        try {
            const response = await axios.post(`${Config.ACCESS_TOKEN_URL}/${Urls.ACCESS_TOKEN_API_URL}`, requestData, {headers});
            const bonusesUrl = `${Config.BONUS_URL}/${Urls.BONUS_API_URL}/${response.data.accessToken}`;
            const result = await axios.get(bonusesUrl, {headers});
            setData(result.data.data);
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    useEffect(() => {
        fetchBonusesData();
    }, []);

    return data;
};
