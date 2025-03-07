package com.example.People;
import org.springframework.data.jpa.repository.JpaRepository;;
import java.util.List;

// Old design
interface GroupPeopleUnionRepository extends JpaRepository<GroupPeopleUnion, Long>{
	List<GroupPeopleUnion> findByGroup(Group group);
	List<GroupPeopleUnion> findByPeople(People people);
}