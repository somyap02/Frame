package com.gallery.service;
import com.gallery.model.Artwork;
import com.gallery.repo.ArtworkRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ArtworkService {
  private final ArtworkRepository repo;
  public ArtworkService(ArtworkRepository repo){this.repo = repo;}
  public Artwork save(Artwork a){return repo.save(a);}
  public List<Artwork> list(){return repo.findAll();}
  public Artwork get(Long id){return repo.findById(id).orElse(null);}
  public List<Artwork> search(String q){return repo.findByTitleContainingIgnoreCase(q);}
}
