package com.gallery.controller;
import com.gallery.model.Artwork;
import com.gallery.service.ArtworkService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/artworks")
@CrossOrigin(origins = "*")
public class ArtworkController {
  private final ArtworkService service;
  public ArtworkController(ArtworkService service){this.service = service;}
  @GetMapping
  public List<Artwork> all(){return service.list();}
  @GetMapping("/search")
  public List<Artwork> search(@RequestParam String q){return service.search(q);}
  @PostMapping
  public Artwork add(@RequestBody Artwork a){return service.save(a);}
  @GetMapping("/{id}")
  public Artwork get(@PathVariable Long id){return service.get(id);}
}
