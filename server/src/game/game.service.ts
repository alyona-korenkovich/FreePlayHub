import {Injectable, NotFoundException, ServiceUnavailableException} from '@nestjs/common';
import { API_URL } from "./const/const";
import axios, { AxiosRequestConfig } from "axios";

@Injectable()
export class GameService {
  async findAll(params: Record<string, string>) {
    const axiosConfig: AxiosRequestConfig = {
      url: API_URL + '/games',
      method: 'GET',
      params,
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
        'X-RapidAPI-Host':
            'free-to-play-games-database.p.rapidapi.com',
      },
    };

    try {
      const response = await axios(axiosConfig);
      if (!response.data.status) {
        throw new NotFoundException('Игры по данному запросу не найдены');
      }
      return response.data;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      else throw new ServiceUnavailableException('Произошла ошибка при получении данных');
    }
  }

  async findOne(id: number) {
    const axiosConfig: AxiosRequestConfig = {
      url: API_URL + '/game',
      method: 'GET',
      params: {
        id: id,
      },
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
        'X-RapidAPI-Host':
            'free-to-play-games-database.p.rapidapi.com',
      },
    }

    try {
      const response = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      if (error.request.res.statusCode === 404) throw new NotFoundException('Игра с таким ID не найдена');
      else throw new ServiceUnavailableException('Произошла ошибка при получении данных');
    }
  }
}
