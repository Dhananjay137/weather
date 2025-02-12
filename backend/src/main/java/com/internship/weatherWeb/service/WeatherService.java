package com.internship.weatherWeb.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class WeatherService {
    private static final String WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

    @Value("${weather.api.key}")
    private String apiKey;

    public Map<String, Object> getWeatherData(String city) {
        String url = WEATHER_API_URL + city + "&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        System.out.println(restTemplate.getForObject(url, Map.class));
        return restTemplate.getForObject(url, Map.class); // Returns full API response
    }
}
