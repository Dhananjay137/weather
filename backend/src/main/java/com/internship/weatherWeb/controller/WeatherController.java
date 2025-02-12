package com.internship.weatherWeb.controller;

import com.internship.weatherWeb.service.WeatherService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*") // Allows frontend requests from any domain
public class WeatherController {
    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/data/{city}")
    public Map<String, Object> getWeather(@PathVariable String city) {
        return weatherService.getWeatherData(city);
    }
}
