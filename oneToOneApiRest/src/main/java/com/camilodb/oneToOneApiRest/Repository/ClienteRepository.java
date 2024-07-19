package com.camilodb.oneToOneApiRest.Repository;

import com.camilodb.oneToOneApiRest.Model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
