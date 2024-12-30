package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	
	@GetMapping("/")
	public String Inicio(Model model) {
		model.addAttribute("titulo", "Noé Figueroa | Programador");		
		return "index";		
	}
	
	@GetMapping("/habilidades")
	public String Habilidades(Model model) {
		model.addAttribute("titulo", "Habilidades - Noé Figueroa");		
		return "habilidades";		
	}		
	
	@GetMapping("/intereses")
	public String Interese(Model model) {
		model.addAttribute("titulo", "Intereses - Noé Figueroa");		
		return "intereses";		
	}	
	
	@GetMapping("/proyectos")
	public String Proyectos(Model model) {
		model.addAttribute("titulo", "Proyectos - Noé Figueroa");		
		return "proyectos";		
	}	
	
	@GetMapping("/contacto")
	public String Contacto(Model model) {
		model.addAttribute("titulo", "Contacto - Noé Figueroa");		
		return "contacto";		
	}
	
	//Eliminar los que siguen
	
	/*
	@GetMapping("/contact")
	public String Contact(Model model) {
		model.addAttribute("titulo", "Contacto Noé Figueroa - Programador");		
		return "contact";
		
	}	
	
	@GetMapping("/catalogo")
	public String Catalogo(Model model) {
		model.addAttribute("titulo", "Catálogo");		
		return "catalogo";
		
	}	
	
	@GetMapping("/about")
	public String About(Model model) {
		model.addAttribute("titulo","Sobre nosotros");		
		return "about";		
		
	}
	
	@GetMapping("/chatbot")
	public String Chatbot(Model model) {
		model.addAttribute("titulo","Chatbot");		
		return "chatbot";		
		
	}	
	
	@GetMapping("/login")
	public String Login(Model model) {
		model.addAttribute("titulo","Inicio de Sesión");		
		return "login";		
		
	}	*/
	
}
