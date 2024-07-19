package com.camilodb.oneToOneApiRest.Repository;

import com.camilodb.oneToOneApiRest.Model.Carro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarroRepository extends JpaRepository<Carro, Integer> {
}
