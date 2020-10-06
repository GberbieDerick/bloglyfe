from django.contrib import admin

# Register your models here.

from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost

class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id','title', 'category', 'date_created')
    list_display_links =  ('id', 'title')
    summernote_fields = ('content',)
    list_per_page = 25

admin.site.register(BlogPost, BlogPostAdmin)


