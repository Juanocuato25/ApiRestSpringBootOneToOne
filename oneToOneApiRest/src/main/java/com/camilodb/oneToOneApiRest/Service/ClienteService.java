package com.camilodb.oneToOneApiRest.Service;

import com.camilodb.oneToOneApiRest.Model.Carro;
import com.camilodb.oneToOneApiRest.Model.Cliente;
import com.camilodb.oneToOneApiRest.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public Cliente crearCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public List<Cliente> getAllCustomer(){
        return clienteRepository.findAll();
    }

    public Cliente updateCustomer(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public void deleteCustomer(Integer id){
        clienteRepository.deleteById(id);
    }
}
