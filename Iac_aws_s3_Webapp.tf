
provider "aws" {
  profile = "default"
  region  = "eu-central-1"
}

resource "aws_s3_bucket" "myweather-app" {
  bucket = "myweather-app"
  acl    = "public-read"
  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "myweather-app" {
  for_each = fileset(path.module, "OpenWeather/**/*")

  bucket       = aws_s3_bucket.myweather-app.id
  key          = replace(each.value, "OpenWeather", "OpenWeather")
  source       = each.value
  acl          = "public-read"
  content_type = "text/html"
}


