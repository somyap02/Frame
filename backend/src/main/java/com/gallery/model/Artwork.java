package com.gallery.model;
import jakarta.persistence.*;
import java.math.BigDecimal;
@Entity
public class Artwork {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  @Column(length = 2000)
  private String description;
  private String imageUrl;
  private BigDecimal price;
  private String category;
  private boolean forAuction;
  public Artwork() {}
  // getters & setters
  public Long getId(){return id;}
  public void setId(Long id){this.id = id;}
  public String getTitle(){return title;}
  public void setTitle(String title){this.title = title;}
  public String getDescription(){return description;}
  public void setDescription(String description){this.description = description;}
  public String getImageUrl(){return imageUrl;}
  public void setImageUrl(String imageUrl){this.imageUrl = imageUrl;}
  public BigDecimal getPrice(){return price;}
  public void setPrice(BigDecimal price){this.price = price;}
  public String getCategory(){return category;}
  public void setCategory(String category){this.category = category;}
  public boolean isForAuction(){return forAuction;}
  public void setForAuction(boolean forAuction){this.forAuction = forAuction;}
}
