package com.camilodb.oneToOneApiRest.Controllers;

import com.camilodb.oneToOneApiRest.Model.Carro;
import com.camilodb.oneToOneApiRest.Service.CarroService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/carro")
@CrossOrigin(origins = "*")
public class CarroController {

    @Autowired
    CarroService carroService;

    @GetMapping
    public List<Carro> listarCarros(){
        return carroService.getAllCars();
    }

    @PostMapping
    public Carro crearCarro(@RequestBody Carro carro){
        return carroService.crearCarro(carro);
    }

    @PutMapping
    public Carro actualizarCarro(@RequestBody Carro carro){
        return carroService.updateCar(carro);
    }

    @DeleteMapping("/{id}")
    public void eliminarCarro(@PathVariable Integer id){
        carroService.deleteCar(id);
    }
}
