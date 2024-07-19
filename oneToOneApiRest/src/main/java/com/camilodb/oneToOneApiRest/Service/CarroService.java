package com.camilodb.oneToOneApiRest.Service;


import com.camilodb.oneToOneApiRest.Model.Carro;
import com.camilodb.oneToOneApiRest.Model.Cliente;
import com.camilodb.oneToOneApiRest.Repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarroService {

    //Con esta anotacion instanciamos la interface
    @Autowired
    CarroRepository carroRepository;

    public Carro crearCarro(Carro carro){
        return carroRepository.save(carro);
    }

    public List<Carro> getAllCars(){
        return carroRepository.findAll();
    }

    public Carro updateCar(Carro carro){
        return carroRepository.save(carro);
    }

    public void deleteCar(Integer id){
        carroRepository.deleteById(id);
    }

}
