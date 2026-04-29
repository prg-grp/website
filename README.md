# programming-group.com

This is the website of the Programming Group at the University of St. Gallen. It is using Jekyll, hosted on GitHub, and was originally based on the [al-folio theme](https://github.com/alshedivat/al-folio), which is based on the [folio theme](https://github.com/bogoli/-folio).

## Build Locally

```
npm install
bundle install
```

## Run Locally

The key command is:
```
bundle exec jekyll serve
```

Make sure you setup your system as instructed [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

> #### MacOS Setup
> You can use [HomeBrew](https://brew.sh/) to install Ruby at the version specified in the `.ruby-version`:
> ```
> brew install chruby ruby-install
> ruby-install ruby 3.2.2
> echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bashrc
> echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.bashrc
> echo "chruby ruby-3.2.2" >> ~/.bashrc
> ```

## License

The website code and theme are available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT). All content, including texts, blogs, images, and articles, are licensed under [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/), if not stated differently within a document or its nearest parent `LICENSE` file.
