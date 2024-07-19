package com.camilodb.oneToOneApiRest.Controllers;


import com.camilodb.oneToOneApiRest.Model.Carro;
import com.camilodb.oneToOneApiRest.Model.Cliente;
import com.camilodb.oneToOneApiRest.Service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    ClienteService clienteService;


    @GetMapping
    public List<Cliente> listaClientes(){
        return clienteService.getAllCustomer();
    }

    @PostMapping
    public Cliente crearCliente(@RequestBody Cliente cliente){
        return clienteService.crearCliente(cliente);
    }

    @PutMapping
    public Cliente actualizarCliente(@RequestBody Cliente cliente){
        return clienteService.updateCustomer(cliente);
    }

    @DeleteMapping("/{id}")
    public void eliminarCliente(@PathVariable Integer id){
        clienteService.deleteCustomer(id);
    }


}
